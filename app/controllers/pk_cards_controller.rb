class PkCardsController < ApplicationController
  before_action :set_pk_card, only: [:show, :edit, :update, :destroy]

  # GET /pk_cards
  # GET /pk_cards.json
  def index
    @pk_cards = PkCard.all
    # @cards = Pokemon::Card.first
    render({json: @pk_cards})
  end

  # GET /pk_cards/1
  # GET /pk_cards/1.json
  def show
  end

  # GET /pk_cards/new
  def new
    @pk_card = PkCard.new
  end

  # GET /pk_cards/1/edit
  def edit
  end

  # POST /pk_cards
  # POST /pk_cards.json
  def create
    @pk_card = PkCard.new(pk_card_params)

    respond_to do |format|
      if @pk_card.save
        format.html { redirect_to @pk_card, notice: 'Pk card was successfully created.' }
        format.json { render :show, status: :created, location: @pk_card }
      else
        format.html { render :new }
        format.json { render json: @pk_card.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /pk_cards/1
  # PATCH/PUT /pk_cards/1.json
  def update
    respond_to do |format|
      if @pk_card.update(pk_card_params)
        format.html { redirect_to @pk_card, notice: 'Pk card was successfully updated.' }
        format.json { render :show, status: :ok, location: @pk_card }
      else
        format.html { render :edit }
        format.json { render json: @pk_card.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /pk_cards/1
  # DELETE /pk_cards/1.json
  def destroy
    @pk_card.destroy
    respond_to do |format|
      format.html { redirect_to pk_cards_url, notice: 'Pk card was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pk_card
      @pk_card = PkCard.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def pk_card_params
      params.fetch(:pk_card, {})
    end
end
