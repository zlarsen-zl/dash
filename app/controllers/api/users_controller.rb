class Api::UsersController < ApplicationController
  def index
    render json: User.all.order(:role)
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
  end
end
