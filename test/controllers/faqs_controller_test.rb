require 'test_helper'

class FaqsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get faqs_index_url
    assert_response :success
  end

  test "should get create" do
    get faqs_create_url
    assert_response :success
  end

  test "should get update" do
    get faqs_update_url
    assert_response :success
  end

  test "should get delete" do
    get faqs_delete_url
    assert_response :success
  end

end
