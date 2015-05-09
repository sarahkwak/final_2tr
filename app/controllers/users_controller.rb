class UsersController < ApplicationController
  require('cine_io')

  def index
  end

  def signature
    client = CineIo::Client.new(secretKey: ENV['CINE_IO_SECRET_KEY'])
    identity = current_user.id
    response = client.peer.generate_identity_signature(identity)
    render json: response
  end
end
