class LikesController < ApplicationController
  def create
    like = Like.new(like_params)
    if like.save
      render json: like
    else
      render like.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    like = like.find(params[:id])
    if like.destroy
      render json: like
    else
      render like.errors.full_messages, status: 400
    end
  end

  private

  def like_params
    params.require(:like).permit(:liker_id, :likeable_id, :likeable_type)
  end
end