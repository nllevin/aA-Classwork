class CommentsController < ApplicationController
  def index
    if params[:user_id]
      user = User.find(params[:user_id])
      comments = user.authored_comments 
    else  
      artwork = Artwork.find(params[:artwork_id])
      comments = artwork.comments 
    end

    render json: comments 
  end

  def create 
    comment = Comment.new(comment_params)
    if comment.save
      render json: comment
    else
      render json: comment.errors.full_messages, status: :unprocessable_entity
    end    
  end

  def destroy
    comment = Comment.find(params[:id])
    if comment.destroy
      render json: comment
    else
      render json: comment.errors.full_messages, status: 400
    end    
  end

  private 
  def comment_params
    params.require(:comment).permit(:body, :author_id, :artwork_id)
  end
end