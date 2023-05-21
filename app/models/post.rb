class Post < ApplicationRecord
    validates :title, presence: true, length: { maximum: 20 }
    validates :start_date, presence: true
    validates :end_date, presence: true
    validates_date :end_date, on_or_after: :start_date
    validates :memo, length: { maximum: 500 }

end
