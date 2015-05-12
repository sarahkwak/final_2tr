class UserMailer < ApplicationMailer
  default from: "postmaster@sandboxd5f0d682e61d4c99874d6fd19fef43ec.mailgun.org"

  def chat_invitation(user)
    @user = user
    @url = 'http://localhost:3000/video'
    mail(to: @user.email, subject: 'Video chat invitation from 2tr')
  end
end
