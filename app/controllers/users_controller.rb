class UsersController < ApplicationController
  require('cine_io')

  def index
  end

  def signature
    client = CineIo::Client.new(secretKey: 'b0574ef773f605cf36f457ef920d5813')
    identity = current_user.id
    response = client.peer.generate_identity_signature(identity)
    render json: response
  end
end
