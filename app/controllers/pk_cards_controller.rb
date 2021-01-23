class PkCardsController < ApplicationController
  before_action :set_pk_card, only: [:show, :edit, :update, :destroy]

  # GET /pk_cards
  # GET /pk_cards.json
  def index
    @pk_cards =  PkCard.where(id: params[:min].to_i .. params[:max].to_i)
    render({json: @pk_cards})
  end

  def total_cards
    @total = PkCard.count
    render({json: @total})
  end

  # GET /pk_cards/1
  # GET /pk_cards/1.json
  def show
  end

  # GET /pk_cards/new
  def new
    @pk_card = PkCard.new
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
