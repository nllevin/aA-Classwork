class SubsController < ApplicationController
  before_action :require_logged_in!, only: [:new, :create, :edit, :update]
  before_action :require_moderator!, only: [:edit, :update]


  def new
    @sub = Sub.new
    render :new
  end

  def create
    @sub = Sub.new(sub_params)
    @sub.moderator_id = current_user.id
    
    if @sub.save
      flash[:success] = "New sub created!"
      redirect_to sub_url(@sub.id)
    else
      flash.now[:error] = @sub.errors.full_messages
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    render :edit
  end

  def update
  
    if @sub.update(sub_params)
        flash[:success] = "Sub updated!"
        redirect_to sub_url(@sub.id)
    else
        flash.now[:error] = @sub.errors.full_messages
        render :edit, status: :unprocessable_entity
    end

  end

  def show
    @sub = Sub.find_by(id: params[:id])
    render :show
  end
  
  def index
    @subs = Sub.all 
    render :index 
  end

  private

  def sub_params
    params.require(:sub).permit(:title, :description)
  end

  def require_moderator!
    @sub = Sub.find_by(id: params[:id])
    unless current_user.id == @sub.moderator_id
        flash[:error] = "You must be moderator for that action"
        redirect_to sub_url(@sub.id)
    end
  end

end