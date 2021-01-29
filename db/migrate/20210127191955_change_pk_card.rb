class ChangePkCard < ActiveRecord::Migration[5.2]
  def change
    change_column :pk_cards, :attacks, :text
    change_column :pk_cards, :weaknesses, :text
    change_column :pk_cards, :resistances, :text
  end
end
