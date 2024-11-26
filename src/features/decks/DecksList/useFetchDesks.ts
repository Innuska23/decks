import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/store";
import { fetchDecksTC } from "../decks-reducer";
import { selectDecks } from "../decks-selectors";
import { DecksType } from "../types/types";

export const useFetchDesks = () => {
    const dispatch = useAppDispatch();

    const decks: DecksType[] = useAppSelector(selectDecks);

    useEffect(() => {
        dispatch(fetchDecksTC())
    }, [dispatch])
    return {
        decks
    }
}