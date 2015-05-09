class UsersController < ApplicationController
  require('cine_io')

  def index
  end

  def signature
    client = CineIo::Client.new(secretKey: '9cd3947bc9fba6aa761c4edf5b795dc6')
    identity = current_user.id
    response = client.peer.generate_identity_signature(identity)
    render json: response
  end
end
