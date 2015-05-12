class UserMailer < ApplicationMailer

  def chat_invitation(user)
    @user = user
    @url = 'http://localhost:3000/video'
    mail(to: @user.email, subject: 'Video chat invitation from 2tr')
  end
end
