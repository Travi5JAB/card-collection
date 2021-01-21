class CreateYgoCards < ActiveRecord::Migration[5.2]
  def change
    create_table :ygo_cards do |t|
      t.bigint :card_id
      t.string :name
      t.string :type
      t.string :desc
      t.string :race
      t.string :archetype
      t.json :card_sets, array: true
      t.json :card_images, array: true
      t.json :card_prices, array: true
      t.timestamps
    end
  end
end
