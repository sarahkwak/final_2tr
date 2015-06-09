class UsersController < ApplicationController
  require('cine_io')

  def index
  end

  # def signature
  #   if current_user
  #     client = CineIo::Client.new(secretKey: ENV['CINE_IO_SECRET_KEY'])
  #     identity = current_user.id
  #     response = client.peer.generate_identity_signature(identity)
  #     render json: response
  #   else
  #     render json: nil
  #   end
  # end

  def students
    @students = User.where(user_type: 1)
  end

  def tutors
    @tutors = User.where(user_type: 2)
  end

  def tutors_map
    @tutors = User.where(user_type: 2)
    render json: @tutors
  end

  def show
    @user = User.find(params[:id])
    @reviews = Review.where(reviewee_id: @user.id)
    render :profile_show
  end

  def video
  end

  def invite
    @user = User.find(params[:id])
    UserMailer.chat_invitation(@user).deliver
    UserMailer.chat_invitation(current_user).deliver
    render json: nil
  end
end
