# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


  pkCardsArray = Dir.entries("./db/json/Pokemon/cards")

  pkCardsArray.each do |fileName|
    dir = "./json/cards/Pokemon/  #{fileName}"
    path = File.join(File.dirname(__FILE__), dir)
    if File.file?(path)
      data = JSON.parse(File.read(path))
      data.each do |card|
        if PkCard.where('card_id = ?', card["id"]).blank?
          PkCard.create(
            card_id: card["id"],
            name: card["name"],
            national_pokedex_number: card["nationalPokedexNumber"],
            image_url: card["imageUrl"],
            image_url_hi_res: card["imageUrlHiRes"],
            subtype: card["subtype"],
            supertype: card["supertype"],
            ability: card["ability"],
            ancient_trait: card["ancientTrait"],
            hp: card["hp"],
            number: card["number"],
            artist: card["artist"],
            rarity: card["rarity"],
            series: card["series"],
            set: card["set"],
            set_code: card["set_code"],
            retreat_cost: card["retreatCost"],
            converted_retreat_cost: card["convertedRetreatCost"],
            text: card["text"],
            types: card["types"],
            attacks: card["attacks"],
            weaknesses: card["weaknesses"],
            resistances: card["resistances"],
            evolves_from: card["evolvesFrom"])
          end    # end create
        end      # end if PkCard exists
      end        # end data do loop
    end          # end if file is file
