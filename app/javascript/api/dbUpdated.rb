require "rubygems"
require "httparty"

module Updater
  include HTTParty
  base_uri "https://db.ygoprodeck.com/"

  def self.all_cards
    get('api/v6/cardinfo.php')
  end
end

Updater.all_cards.each do |card|
  p card
  Card.create(
    card_id: card["id"],
    name: card["name"],
    type: card["type"],
    desc: card["desc"],
    atk: card["atk"],
    def: card["def"],
    level: card["level"],
    race: card["race"],
    archetype: card["archetype"],
    card_sets: card["card_sets"],
    card_images: card["card_images"],
    card_prices: card["card_prices"]

  )
end
