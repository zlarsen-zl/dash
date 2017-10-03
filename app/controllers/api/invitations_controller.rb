class Api::InvitationsController < ApplicationController

  def accept
    user = User.accept_invitation!(invite_params)
    render json: user, status: 200
  end

  def invite
    user = User.invite!(user_params)
    render json: user, status: 200
  end

  private
    def user_params
      params.require(:user).permit(:name, :username, :email, :role)
    end

    def invite_params
      params.require(:invite).permit(:password, :password_confirmation, :invitation_token)
    end
end
