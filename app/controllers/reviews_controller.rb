class ReviewsController < ApplicationController
  def create
    @review = Review.new(
      content: params[:content],
      rating: params[:rating],
      reviewer_id: current_user.id,
      reviewee_id: params[:reviewee_id]
    )
  end
end
