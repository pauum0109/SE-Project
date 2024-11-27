
INSERT INTO public."Category" (
    id, "createdAt", title, "desc", color, img, slug
) VALUES
(3, '2024-11-26 15:13:16.146', 'Drinks', 'Start your culinary journey with our delightful appetizers. Perfectly crafted to excite your palate, featuring a blend of fresh and vibrant flavors.', 'black', '/matcha-latte-co-ngon-khong.jpg', 'Drinks'),
(2, '2024-11-26 15:13:16.146', 'Appetizer', 'Quench your thirst with our refreshing beverages. From comforting classics to innovative blends, there’s a perfect drink to complement every meal.', 'black', '/FreshSpringRolls_Shot5_82.jpg', 'Appetizer'),
(1, '2024-11-26 15:11:50.557', 'Maincourses', 'Indulge in our hearty main courses, showcasing a fusion of traditional and contemporary cuisines that deliver bold and satisfying flavors in every bite.', 'black', '/ramen.jpg', 'Maincourses');
(4, '2024-11-26 15:11:50.557', 'aaaa', 'aaaa', 'black', '/ramen.jpg', 'aaaa');



INSERT INTO public."Product" (
    id, "createdAt", title, "desc", img, price, "isFeatured", options, "catSlug"
) VALUES
(2, '2024-11-26 15:54:53.886', 'Grilled Salmon', 'Perfectly grilled salmon filet, served with a side of garlic mashed potatoes and sautéed seasonal vegetables.', '/grilled-salmon.jpg', 18.000000000000000000000000000000, 't', '{}', 'Maincourses'),
(3, '2024-11-26 15:54:53.886', 'Fruit Smoothie', 'A vibrant blend of fresh fruits, yogurt, and a touch of honey, crafted into a creamy and delicious smoothie.', '/fruit-smoothie.jpg', 6.000000000000000000000000000000, 't', '{}', 'Drinks'),
(4, '2024-11-26 15:54:53.886', 'Iced Coffee', 'Cool down with our refreshing iced coffee, brewed to perfection and served over ice for a crisp and energizing experience.', '/iced-coffee.jpg', 4.000000000000000000000000000000, 't', '{}', 'Drinks'),
(5, '2024-11-26 15:54:53.886', 'Stuffed Mushrooms', 'Juicy mushroom caps stuffed with a blend of breadcrumbs, garlic, herbs, and melted cheese, baked to perfection.', '/stuffed-mushrooms.jpg', 8.000000000000000000000000000000, 't', '{}', 'Appetizer'),
(6, '2024-11-26 15:54:53.886', 'Spring Rolls', 'Freshly rolled rice paper wraps filled with crisp vegetables and served with a tangy dipping sauce.', '/spring-rolls.jpg', 7.000000000000000000000000000000, 't', '{}', 'Appetizer'),
(7, '2024-11-26 15:54:53.886', 'Bruschetta', 'Crispy toasted bread topped with fresh tomatoes, basil, garlic, and a drizzle of olive oil, delivering a burst of Mediterranean flavor.', '/bruschetta.jpg', 6.000000000000000000000000000000, 't', '{}', 'Appetizer'),
(8, '2024-11-26 15:54:53.886', 'Chicken Alfredo Pasta', 'Creamy Alfredo sauce served over fettuccine pasta, topped with tender grilled chicken and fresh parsley.', '/chicken-alfredo.jpg', 14.000000000000000000000000000000, 't', '{}', 'Maincourses'),
(9, '2024-11-26 15:54:53.886', 'Beef Stroganoff', 'Tender beef slices cooked in a creamy mushroom sauce, served over egg noodles for a hearty, satisfying meal.', '/beef-stroganoff.jpg', 16.000000000000000000000000000000, 't', '{}', 'Maincourses'),
(1, '2024-11-26 15:54:53.886', 'Matcha Latte', 'Indulge in the serene harmony of our matcha latte, a perfect blend of earthy flavors and creamy milk, offering a moment of tranquility and revitalization.', '/unnamed.jpg', 5.000000000000000000000000000000, 't', '{}', 'Drinks');

