class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  has_many :reviews
  has_many :questions
  has_many :answers

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable, :omniauth_providers => [:linkedin]

  has_many :reviewer_relationships, class_name: "Review", foreign_key: "reviewee_id"
  has_many :reviewers, class_name: "User", through: :reviewer_relationships

  has_many :reviewee_relationships, class_name: "Review", foreign_key: "reviewer_id"
  has_many :reviewees, class_name: "User", through: :reviewee_relationships
  has_attached_file :image
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
  # has_many :reviewer_relationships, through: :review, foreign_key: :reviewer_id
  # has_many :reviewers, source: :user, through: :reviewer_relationships

  # has_many :reviewee_relationships, through: :review, foreign_key: :reviewee_id
  # has_many :reviewees, source: :user, through: :reviewee_relationships
  def self.from_omniauth(auth)
      where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
        user.provider = auth.provider
        user.uid = auth.uid
        user.email = auth.info.email
        user.password = Devise.friendly_token[0,20]
      end
  end
end
