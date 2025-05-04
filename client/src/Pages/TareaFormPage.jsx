import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { getTareaById, createTarea, updateTarea, deleteTarea } from "../api/tareas.api";
import { useEffect } from "react";

export function TareaFormPage() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const navigate = useNavigate();
    const params = useParams();

    const loadTarea = async () => {
        if (params.id) {
            try {
                const tarea = await getTareaById(params.id);
                setValue("titulo", tarea.titulo);
                setValue("descripcion", tarea.descripcion);
            } catch (error) {
                console.error("Error al cargar la tarea:", error);
            }
        }
    };

    const onSubmit = async (data) => {
        try {
            if (params.id) {
                await updateTarea(params.id, data); // Actualiza la tarea
            } else {
                await createTarea(data); // Crea una nueva tarea
            }
            navigate("/Tareas");
        } catch (error) {
            console.error("Error al guardar la tarea:", error);
        }
    };

    const handleDelete = async () => {
        const accepted = window.confirm("¿Estás seguro de que deseas eliminar esta tarea?");
        if (accepted) {
            try {
                await deleteTarea(params.id);
                navigate("/Tareas");
            } catch (error) {
                console.error("Error al eliminar la tarea:", error);
            }
        }
    };

    useEffect(() => {
        loadTarea();
    }, [params.id]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="formulario">
            <h1>{params.id ? "Editar Tarea" : "Crear Tarea"}</h1>
            <input
                type="text"
                placeholder="Nombre de la tarea"
                {...register("titulo", { required: true })}
            />
            {errors.titulo && <span className="error">Este campo es requerido</span>}

            <textarea
                rows="3"
                placeholder="Descripción de la tarea"
                {...register("descripcion", { required: true })}
            />
            {errors.descripcion && <span className="error">Este campo es requerido</span>}

            <button type="submit" className="btn btn-primary">
                {params.id ? "Actualizar Tarea" : "Crear Tarea"}
            </button>

            {params.id && (
                <button type="button" className="btn btn-danger" onClick={handleDelete}>
                    Eliminar Tarea
                </button>
            )}
        </form>
    );
}