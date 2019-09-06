class PostsController < ApplicationController
  before_action :require_logged_in!, only: [:new, :create, :edit, :update]
  before_action :require_author!, only: [:edit, :update]

  def new
    @post = Post.new(sub_ids: params[:sub_id])
    render :new
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id

    if @post.save
      flash[:success] = "Post created!"
      redirect_to post_url(@post.id)
    else
      flash.now[:error] = @post.errors.full_messages
      render :new, status: :unprocessable_entity
    end
    
  end

  def edit
    render :edit
  end

  def update
    if @post.update(post_params)
      flash[:success] = "Post edited!"
      redirect_to post_url(@post.id)
    else
      flash.now[:error] = @post.errors.full_messages
      render :edit, status: :unprocessable_entity
    end
  end

  def show
    @post = Post.find_by(id: params[:id])
    render :show
  end

  private

  def post_params
    params.require(:post).permit(:title, :url, :content, sub_ids: [])
  end

  def require_author!
     @post = Post.find_by(id: params[:id])
      unless current_user.id == @post.author_id
        flash[:error] = "You must be the author for that action"
        redirect_to post_url(@post.id)
    end
  end

end