require "rails_helper"

RSpec.describe "Api::V1::Current::Users", type: :request do
  describe "GET api/v1/current/user" do
    subject { get(api_v1_current_user_path, headers:) }

    let(:current_user) { create(:user) }
    let(:headers) { current_user.create_new_auth_token }

    context "ヘッダー情報が正常に送られた時" do
      it "正常にレコードを取得できる" do
        subject
        res = JSON.parse(response.body)
        expect(res.keys).to eq ["id", "name", "email"]
        expect(response).to have_http_status(:ok)
      end
    end

    context "ヘッダー情報が空のままリクエストが送信された時" do
      let(:headers) { nil }

      it "unauthorized エラーが返る" do
        subject
        res = JSON.parse(response.body)
        expect(res["errors"]).to eq ["ログインもしくはアカウント登録してください。"]
        expect(response).to have_http_status(:unauthorized)
      end
    end
  end
end
