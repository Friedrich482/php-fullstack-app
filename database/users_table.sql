-- Table: public.users

-- DROP TABLE IF EXISTS public.users;

CREATE TABLE IF NOT EXISTS public.users
(
    username character varying(128) COLLATE pg_catalog."default" NOT NULL,
    password character varying(255) COLLATE pg_catalog."default" NOT NULL,
    email character varying(128) COLLATE pg_catalog."default" NOT NULL,
    registerdate timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    visits integer NOT NULL DEFAULT 0,
    id integer NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    snake_best_score integer DEFAULT 0,
    shifumi_best_score integer DEFAULT 0,
    code integer DEFAULT 0,
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT uk_email UNIQUE (email),
    CONSTRAINT uk_username UNIQUE (username)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to postgres;

COMMENT ON COLUMN public.users.snake_best_score
    IS 'Best score at snake game';

COMMENT ON COLUMN public.users.shifumi_best_score
    IS 'Best score at shifumi game';

COMMENT ON COLUMN public.users.code
    IS 'code to reset password';