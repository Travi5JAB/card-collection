class CreatePkCards < ActiveRecord::Migration[5.2]
  enable_extension 'hstore' unless extension_enabled?('hstore')
  def change
    create_table :pk_cards do |t|
      t.string :card_id
      t.string :name
      t.integer :national_pokedex_number
      t.string :image_url
      t.string :image_url_hi_res
      t.string :subtype
      t.string :supertype
      t.hstore :ability
      t.hstore :ancient_trait
      t.string :hp
      t.string :number
      t.string :artist
      t.string :rarity
      t.string :series
      t.string :set
      t.string :set_code
      t.string :retreat_cost, array: true
      t.integer :converted_retreat_cost
      t.string :text, array: true
      t.string :types, array: true
      t.string :attacks, array: true
      t.string :weaknesses, array: true
      t.string :resistances, array: true
      t.string :evolves_from

      t.timestamps
    end
  end
end
