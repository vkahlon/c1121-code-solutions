select

from "actors"
join "castMembers" using ("actorId")
join "filmGenre" using ("filmId")
where "firstName" = 'Lisa';
