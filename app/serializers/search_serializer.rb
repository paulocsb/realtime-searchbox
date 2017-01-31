class SearchSerializer < ActiveModel::Serializer
  attributes :id, :ip_address, :query, :searches_count
end