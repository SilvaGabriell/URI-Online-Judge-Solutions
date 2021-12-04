SELECT pd.name
     , pv.name
FROM providers pv
INNER JOIN products pd
        ON pd.id_providers = pv.id
WHERE pv.name = 'Ajax SA'