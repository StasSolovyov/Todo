import Button from '../UI/Button';
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
function TodoActions({
    resetTodos,
    deleteCompletedTodos,
    completedTodosExist,
}) {
    return (
        <>
            <Button title="Reset Todos" onClick={resetTodos}>
                <RiRefreshLine />
            </Button>
            <Button
                title="Clear Completed Todos"
                onClick={deleteCompletedTodos}
                disable={!completedTodosExist}
            >
                <RiDeleteBin2Line />
            </Button>
        </>
    );
}

export default TodoActions;
