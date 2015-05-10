class QuestionsController < ApplicationController
  def index
    @questions = Question.all
    @question = Question.new
    @answer = Answer.new
  end

  def create
    @question = Question.new(question_params)
    @question.user_id = current_user.id if current_user
    if @question.save
      render json: @question
    else
      render json: @question.errors.full_messages
    end
  end

  private
  def question_params
    params.require(:question).permit(:title, :content)
  end
end
