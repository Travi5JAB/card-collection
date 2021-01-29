class PkCard < ApplicationRecord
  # serialize :ability, JSON
    serialize :attacks, Array
    serialize :weaknesses, Array
    serialize :resistances, Array
end
