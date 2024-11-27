--
-- PostgreSQL database dump
--

-- Dumped from database version 17.2 (Debian 17.2-1.pgdg120+1)
-- Dumped by pg_dump version 17.2 (Debian 17.2-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Account; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public."Account" (
    id text NOT NULL,
    "userId" text NOT NULL,
    type text NOT NULL,
    provider text NOT NULL,
    "providerAccountId" text NOT NULL,
    refresh_token text,
    access_token text,
    expires_at integer,
    token_type text,
    scope text,
    id_token text,
    session_state text
);


ALTER TABLE public."Account" OWNER TO myuser;

--
-- Name: Category; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public."Category" (
    id text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    title text NOT NULL,
    "desc" text NOT NULL,
    color text NOT NULL,
    img text NOT NULL,
    slug text NOT NULL
);


ALTER TABLE public."Category" OWNER TO myuser;

--
-- Name: Order; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public."Order" (
    id text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    price numeric(65,30) NOT NULL,
    products jsonb[],
    status text NOT NULL,
    intent_id text,
    "userEmail" text NOT NULL
);


ALTER TABLE public."Order" OWNER TO myuser;

--
-- Name: Product; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public."Product" (
    id text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    title text NOT NULL,
    "desc" text NOT NULL,
    img text,
    price numeric(65,30) NOT NULL,
    "isFeatured" boolean DEFAULT false NOT NULL,
    options jsonb[],
    "catSlug" text NOT NULL
);


ALTER TABLE public."Product" OWNER TO myuser;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO myuser;

--
-- Data for Name: Account; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public."Account" (id, "userId", type, provider, "providerAccountId", refresh_token, access_token, expires_at, token_type, scope, id_token, session_state) FROM stdin;
\.


--
-- Data for Name: Category; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public."Category" (id, "createdAt", title, "desc", color, img, slug) FROM stdin;
2	2024-11-26 08:03:09.771	Maincourses	Indulge in our hearty main courses, showcasing a fusion of traditional and contemporary cuisines that deliver bold and satisfying flavors in every bite.	black	/ramen.jpg	Maincourses
1	2024-11-26 08:03:09.771	Appetizer	Start your culinary journey with our delightful appetizers. Perfectly crafted to excite your palate, featuring a blend of fresh and vibrant flavors.	black	/FreshSpringRolls_Shot5_82.jpg	Appetizer
3	2024-11-26 08:03:09.771	Drinks	Quench your thirst with our refreshing beverages. From comforting classics to innovative blends, thereΓÇÖs a perfect drink to complement every meal.	black	/matcha-latte-co-ngon-khong.jpg	Drinks
\.


--
-- Data for Name: Order; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public."Order" (id, "createdAt", price, products, status, intent_id, "userEmail") FROM stdin;
\.


--
-- Data for Name: Product; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public."Product" (id, "createdAt", title, "desc", img, price, "isFeatured", options, "catSlug") FROM stdin;
1	2024-11-26 12:16:54.999	"Matcha Latte	Indulge in the serene harmony of our matcha latte, a perfect blend of earthy flavors and creamy milk, offering a moment of tranquility and revitalization.	/unnamed.jpg	5.000000000000000000000000000000	t	{}	Drinks
4	2024-11-26 12:21:34.31	Grilled Salmon	Perfectly grilled salmon filet, served with a side of garlic mashed potatoes and saut├⌐ed seasonal vegetables.	/grilled-salmon.jpg	18.000000000000000000000000000000	t	{}	Maincourses
3	2024-11-26 12:21:34.31	Fruit Smoothie	A vibrant blend of fresh fruits, yogurt, and a touch of honey, crafted into a creamy and delicious smoothie.	/fruit-smoothie.jpg	6.000000000000000000000000000000	t	{}	Drinks
2	2024-11-26 12:21:34.31	Iced Coffee	Cool down with our refreshing iced coffee, brewed to perfection and served over ice for a crisp and energizing experience.	/iced-coffee.jpg	4.000000000000000000000000000000	t	{}	Drinks
9	2024-11-26 12:24:52.416	Stuffed Mushrooms	Juicy mushroom caps stuffed with a blend of breadcrumbs, garlic, herbs, and melted cheese, baked to perfection.	/stuffed-mushrooms.jpg	8.000000000000000000000000000000	t	{}	Appetizer
8	2024-11-26 12:24:52.416	Spring Rolls	Freshly rolled rice paper wraps filled with crisp vegetables and served with a tangy dipping sauce.	/spring-rolls.jpg	7.000000000000000000000000000000	t	{}	Appetizer
7	2024-11-26 12:24:52.416	Bruschetta	Crispy toasted bread topped with fresh tomatoes, basil, garlic, and a drizzle of olive oil, delivering a burst of Mediterranean flavor.	/bruschetta.jpg	6.000000000000000000000000000000	t	{}	Appetizer
5	2024-11-26 12:21:34.31	Chicken Alfredo Pasta	Creamy Alfredo sauce served over fettuccine pasta, topped with tender grilled chicken and fresh parsley.	/chicken-alfredo.jpg	14.000000000000000000000000000000	t	{}	Maincourses
6	2024-11-26 12:21:34.31	Beef Stroganoff	Tender beef slices cooked in a creamy mushroom sauce, served over egg noodles for a hearty, satisfying meal.	/beef-stroganoff.jpg	16.000000000000000000000000000000	t	{}	Maincourses
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
cd34c6dd-c12d-4659-b1e2-a7f445d079a2	97fa17897505e22611f397d1cad685a54143c6865f0917a6f70c3ceafdf30b97	2024-11-25 15:31:35.120117+00	20241125153135_first	\N	\N	2024-11-25 15:31:35.103039+00	1
38af6399-eff1-4433-80c0-0c9acf0d804b	867cec68026852380ee79891e25915f0002ebd0432c18ac510c55817175ffccc	2024-11-26 13:17:08.448203+00	20241126131708_second	\N	\N	2024-11-26 13:17:08.432994+00	1
\.


--
-- Name: Account Account_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."Account"
    ADD CONSTRAINT "Account_pkey" PRIMARY KEY (id);


--
-- Name: Category Category_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."Category"
    ADD CONSTRAINT "Category_pkey" PRIMARY KEY (id);


--
-- Name: Order Order_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."Order"
    ADD CONSTRAINT "Order_pkey" PRIMARY KEY (id);


--
-- Name: Product Product_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "Product_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Account_provider_providerAccountId_key; Type: INDEX; Schema: public; Owner: myuser
--

CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON public."Account" USING btree (provider, "providerAccountId");


--
-- Name: Category_slug_key; Type: INDEX; Schema: public; Owner: myuser
--

CREATE UNIQUE INDEX "Category_slug_key" ON public."Category" USING btree (slug);


--
-- Name: Order_intent_id_key; Type: INDEX; Schema: public; Owner: myuser
--

CREATE UNIQUE INDEX "Order_intent_id_key" ON public."Order" USING btree (intent_id);


--
-- Name: Product Product_catSlug_fkey; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "Product_catSlug_fkey" FOREIGN KEY ("catSlug") REFERENCES public."Category"(slug) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

