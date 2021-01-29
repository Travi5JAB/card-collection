class PkCardsController < ApplicationController
  before_action :set_pk_card, only: [:show, :edit, :update, :destroy]

  # GET /pk_cards
  # GET /pk_cards.json
  def index
    @all_cards = PkCard.all.order(:set)
    @pk_cards =  @all_cards.where(id: params[:min].to_i .. params[:max].to_i)
    render json: @pk_cards
  end

  # total number of pk cards
  def total_cards
    @total = PkCard.count
    render json: @total
  end
  # total number of pk cards per set
  def total_set_cards
    @total = PkCard.where(set: params[:set]).count
    render json: @total
  end

  # GET /pk_cards/1
  # GET /pk_cards/1.json
  def show
    @card = PkCard.find(params[:id])
    render json: @card
  end

  def pk_cards_by_set
    @all_cards = PkCard.all
    @cards_by_set = @all_cards.where(set: params[:set]).order('number::integer')
    @pk_cards =  @cards_by_set.where('number::integer BETWEEN ? AND ?', params[:min].to_i, params[:max].to_i)
    p @cards_by_set.count
    render json: @pk_cards
  end

  def pk_card_sets
    @sets = PkCard.distinct.pluck(:set)
    render json: @sets
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
