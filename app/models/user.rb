class User < ActiveRecord::Base
  # Include default devise modules.
  devise :invitable, :database_authenticatable, :registerable, :invitable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable
  include DeviseTokenAuth::Concerns::User
end
