class CommentsController < ApplicationController
    before_action :require_logged_in!
    
    def new
        @comment = Comment.new(post_id: params[:post_id])
        render :new
    end

    def create
        @comment = Comment.new(comment_params)
        @comment.author_id = current_user.id
        if @comment.save
          flash[:success] = "Comment posted!"
          redirect_to post_url(@comment.post_id)
        else
          flash.now[:error] = @comment.errors.full_messages
          render :new, status: :unprocessable_entity
        end
    end

    private

    def comment_params
      params.require(:comment).permit(:content, :post_id)
    end
end