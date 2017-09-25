class Province < ApplicationRecord
has_many :city
	validates :province,presence:true,
			    length:{minimum:2}

end
