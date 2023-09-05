class Api::V1::User::ConfirmationsController < Api::V1::BaseController
  def update
    user = User.find_by(confirmation_token: params[:confirmation_token])
    return render json: { message: "User record is not found." }, status: :not_found if user.nil?
    return render json: { message: "User has already been confirmed." }, status: :bad_request if user.confirmed?

    user.update!(confirmed_at: Time.current)

    render json: { message: "User confirmartion succeeded." }, status: :ok
  end
end
