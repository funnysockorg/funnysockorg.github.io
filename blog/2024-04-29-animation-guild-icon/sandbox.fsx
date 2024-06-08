
let calc columnsCount xs =
    let setScore xs =
        xs
        |> List.mapi (fun i x ->
            x, columnsCount - i
        )

    xs
    |> List.map setScore
    |> List.concat
    |> List.groupBy fst
    |> List.map (fun (key, xs) ->
        key, List.sumBy snd xs
    )
    |> List.sortByDescending snd

let xs = [
    ["Г"; "В"]
    ["В"; "А"]
    ["Б"; "Е"]
    ["А"; "Д"]
]

let count = 2

calc count xs
