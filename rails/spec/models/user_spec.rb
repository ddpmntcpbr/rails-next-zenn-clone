require "rails_helper"

RSpec.describe User, type: :model do
  context "factoryのデフォルト設定に従った場合" do
    let(:user) { create(:user) }

    it "認証済みの user レコードを正常に新規作成できる" do
      expect(user).to be_valid
      expect(user).to be_confirmed
    end
  end
end
