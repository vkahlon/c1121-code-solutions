select
  "c"."name" as "country",
  count("cit".*) as "On the map"
from
  "countries" as "c"
join
  "cities" as "cit" using ("countryId")
group by
  "c"."countryId";
