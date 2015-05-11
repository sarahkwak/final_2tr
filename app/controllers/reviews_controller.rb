class ReviewsController < ApplicationController
  def create
    @review = Review.new(
      content: params[:content],
      rating: params[:rating],
      reviewer_id: current_user.id,
      reviewee_id: params[:id]
    )
    if @review.save
      render json: @review
    else
      render json: @review.errors.full_messages
    end
  end
end
