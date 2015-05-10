class AnswersController < ApplicationController
  def show
    @answers = Answer.where(question_id: params[:id])
    render json: @answers
  end

  def create
    @answer = Answer.new(
      title: params[:title],
      content: params[:content]
      )
    @answer.user_id = current_user.id if current_user
    @answer.question_id = params[:id]
    if @answer.save
      render json: @answer
    else
      render json: @answer.errors.full_messages
    end
  end
end
