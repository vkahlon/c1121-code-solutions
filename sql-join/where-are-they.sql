select
  "line1",
  "cities"."name" as "name",
  "district",
  "countries"."name" as "country"
from
  "addresses"
  join "cities" using ("cityId")
  join "countries" using ("countryId")
