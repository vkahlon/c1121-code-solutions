select "genres"."name" as "Genre",
count(*)
from "actors"
join "castMembers" using ("actorId")
join "filmGenre" using ("filmId")
join "genres" using ("genreId")
where "firstName" = 'Lisa'
group by "Genre";
