SELECT c.name
     , CAST((((s.math*2) + (s.specific*3) + (s.project_plan*5)) / 10) AS NUMERIC(15, 2)) AS avg
FROM candidate c
INNER JOIN score s
        ON s.candidate_id = c.id
ORDER BY avg DESC