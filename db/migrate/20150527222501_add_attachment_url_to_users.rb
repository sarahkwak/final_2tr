  class AddAttachmentUrlToUsers < ActiveRecord::Migration
  def self.up
    change_table :users do |t|
      t.attachment :url
    end
  end

  def self.down
    remove_attachment :users, :url
  end
end
