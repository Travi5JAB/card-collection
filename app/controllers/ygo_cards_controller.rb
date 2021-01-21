class YgoCardsController < ApplicationController
  # require 'updater/lib/updater'
  def index
  end

  def updater
  end

# update datebase
  def database_update
    @data = my_action()
    @data.each do |card|
      # create card entry if card doesnt exist
      if card.where('id = ?', card.id).blank?
        YgoCard.create(
          card_id: card.id,
          name: card.name,
          type: card.type,
          desc: card.desc,
          atk: card.atk,
          def: card.def,
          level: card.level,
          race: card.race,
          archetype: card.archetype,
          card_sets: card.sets,
          card_images: card.images,
          card_prices: card.prices
        )
      # if any attributes have changed update card
      else if card.where('name = ?', card.name).blank? || card.where('type = ?', card.type).blank? || card.where('desc = ?', card.desc).blank? || card.where('atk = ?', card.atk).blank? || card.where('def = ?', card.def).blank? || card.where('level = ?', card.level).blank? || card.where('race = ?', card.race).blank? || card.where('card_sets = ?', card.card_sets).blank? || card.where('card_images = ?', card.card_images).blank? || card.where('card_prices = ?', card.card_prices).blank?
        YgoCard.update(
          card_id: card.id,
          name: card.name,
          type: card.type,
          desc: card.desc,
          atk: card.atk,
          def: card.def,
          level: card.level,
          race: card.race,
          archetype: card.archetype,
          card_sets: card.sets,
          card_images: card.images,
          card_prices: card.prices
        )
      end
    end
    redirect_to "/users/edit"
  end

  def my_action
    respond_to do |format|
      format.js { render :js => 'allYgoCards();' }
    end
  end
end

end
