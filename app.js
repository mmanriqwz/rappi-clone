// DATOS INICIALES (8 VERTICALES, 18 TIENDAS Y 112 PRODUCTOS)
const VERTICALS = [
  { id: 'Restaurantes', name: 'Restaurantes', emoji: '🍔' },
  { id: 'Supermercados', name: 'Supermercados', emoji: '🛒' },
  { id: 'Farmacia', name: 'Farmacia', emoji: '💊' },
  { id: 'Licores', name: 'Licores', emoji: '🍷' },
  { id: 'Turbo', name: 'Turbo 10m', emoji: '⚡' },
  { id: 'Mascotas', name: 'Mascotas', emoji: '🐶' },
  { id: 'Tecnología', name: 'Tecnología', emoji: '🎧' },
  { id: 'RappiFavor', name: 'RappiFavor', emoji: '🛵' }
];

const STORES = [
  // RESTAURANTES (5 tiendas, 32 productos)
  {
    id: 1,
    name: 'Smash Burger Lab',
    category: 'Restaurantes',
    time: '20-30 min',
    shipping: 3500,
    rating: 4.9,
    emoji: '🍔',
    bg: '#fff1ee',
    products: [
      { id: 'p101', title: 'Combo Doble Smash + Papas', desc: 'Doble carne madurada, queso cheddar, salsa secreta y papas.', price: 28900 },
      { id: 'p102', title: 'Bacon Truffle Burger', desc: 'Tocineta caramelizada, mayonesa de trufa negra y pan brioche.', price: 32500 },
      { id: 'p103', title: 'Chicken Crispy Honey Mustard', desc: 'Pechuga apanada crocante con miel mostaza y pepinillos.', price: 26900 },
      { id: 'p104', title: 'Triple Oklahoma Onion Smash', desc: 'Tres carnes aplastadas con cebolla fina a la plancha y doble cheddar.', price: 35900 },
      { id: 'p105', title: 'Papas Bravas con Tocineta y Queso', desc: 'Porción grande con salsa cheddar fundida y cebollín.', price: 16900 },
      { id: 'p106', title: 'Aros de Cebolla Crocantes (10 und)', desc: 'Acompañados de salsa BBQ ahumada de la casa.', price: 13500 },
      { id: 'p107', title: 'Malteada Oreo & Vainilla 16oz', desc: 'Helado artesanal batido con galletas Oreo.', price: 14500 }
    ]
  },
  {
    id: 2,
    name: 'Sushi Master Nikkei',
    category: 'Restaurantes',
    time: '25-35 min',
    shipping: 4000,
    rating: 4.8,
    emoji: '🍣',
    bg: '#fef2f2',
    products: [
      { id: 'p201', title: 'Tabla Acevichada 20 Bocados', desc: 'Salmón fresco, langostino tempura y salsa acevichada.', price: 46900 },
      { id: 'p202', title: 'Ramen Tonkotsu Clásico', desc: 'Caldo de 12 horas, chashu de cerdo, huevo marinado y fideos.', price: 36000 },
      { id: 'p203', title: 'Rollo Dinamita Tempura (10 und)', desc: 'Palmito de cangrejo, aguacate, queso crema y topping spicy.', price: 29500 },
      { id: 'p204', title: 'Poke Bowl Salmón & Mango', desc: 'Base de arroz sushi, edamames, aguacate, wakame y ajonjolí.', price: 34900 },
      { id: 'p205', title: 'Gyozas de Cerdo y Jengibre (6 und)', desc: 'Selladas a la plancha con salsa ponzu cítrica.', price: 19800 },
      { id: 'p206', title: 'Sashimi de Salmón Fresco (9 cortes)', desc: 'Cortes gruesos acompañados de wasabi y jengibre.', price: 31000 },
      { id: 'p207', title: 'Té Helado Matcha & Limón', desc: 'Infusión fría natural ligeramente endulzada.', price: 9500 }
    ]
  },
  {
    id: 3,
    name: 'La Trattoria Napolitana',
    category: 'Restaurantes',
    time: '25-40 min',
    shipping: 3500,
    rating: 4.9,
    emoji: '🍕',
    bg: '#fff7ed',
    products: [
      { id: 'p301', title: 'Pizza Pepperoni & Miel Picante', desc: 'Masa madre fermentada 48h, mozzarella fior di latte.', price: 38900 },
      { id: 'p302', title: 'Pizza 4 Quesos & Albahaca', desc: 'Mozzarella, gorgonzola, parmesano reggiano y provolone.', price: 41000 },
      { id: 'p303', title: 'Lasaña Boloñesa al Horno', desc: 'Capas de pasta fresca, ragú tradicional y parmesano.', price: 34500 },
      { id: 'p304', title: 'Fettuccine Alfredo con Pollo y Champiñones', desc: 'Salsa cremosa de parmesano y pimienta negra recién molida.', price: 32900 },
      { id: 'p305', title: 'Pan de Ajo con Queso Fundido', desc: '4 porciones horneadas con mantequilla de hierbas.', price: 14900 },
      { id: 'p306', title: 'Tiramisú Artesanal Italiano', desc: 'Mascarpone, café espresso y cacao amargo.', price: 16500 }
    ]
  },
  {
    id: 13,
    name: 'Taquería El Chingón',
    category: 'Restaurantes',
    time: '20-30 min',
    shipping: 3000,
    rating: 4.8,
    emoji: '🌮',
    bg: '#fefce8',
    products: [
      { id: 'p1301', title: 'Orden de 4 Tacos al Pastor', desc: 'Tortilla de maíz nixtamalizado, piña asada, cilantro y cebolla.', price: 24500 },
      { id: 'p1302', title: 'Tacos de Birria con Consomé (3 und)', desc: 'Res braseada por 8 horas con queso fundido y caldo para dippear.', price: 29900 },
      { id: 'p1303', title: 'Burrito Supremo de Arrachera', desc: 'Frijol refrito, guacamole, pico de gallo, crema agria y carne.', price: 27900 },
      { id: 'p1304', title: 'Nachos Machos con Chili y Guacamole', desc: 'Totopos crocantes bañados en queso fundido y jalapeños.', price: 25500 },
      { id: 'p1305', title: 'Quesadilla Sincronizada de Pollo Chipotle', desc: 'Tortilla de harina grande con mezcla de quesos.', price: 21500 },
      { id: 'p1306', title: 'Agua de Horchata con Canela 500ml', desc: 'Bebida tradicional mexicana bien fría.', price: 8500 }
    ]
  },
  {
    id: 14,
    name: 'Parrilla & Carbón Tradición',
    category: 'Restaurantes',
    time: '30-45 min',
    shipping: 4000,
    rating: 4.9,
    emoji: '🥩',
    bg: '#fef2f2',
    products: [
      { id: 'p1401', title: 'Churrasco Argentino 350g', desc: 'Acompañado de papa al vapor, ensalada fresca y chimichurri.', price: 48900 },
      { id: 'p1402', title: 'Punta de Anca Madurada 300g', desc: 'Corte jugoso a la brasa con arepa con queso y patacón.', price: 46500 },
      { id: 'p1403', title: 'Costillas BBQ St. Louis (500g)', desc: 'Cocción lenta bañadas en salsa BBQ artesanal y papas rústicas.', price: 44900 },
      { id: 'p1404', title: 'Bandeja Paisa Completa', desc: 'Frijoles, arroz, chicharrón carnudo, carne molida, huevo y aguacate.', price: 36900 },
      { id: 'p1405', title: 'Chorizo Santarrosano con Arepa y Limón', desc: 'Entrada tradicional asada al carbón.', price: 14900 },
      { id: 'p1406', title: 'Limonada de Coco Natural 16oz', desc: 'Cremosa y refrescante hecha al momento.', price: 11500 }
    ]
  },

  // TURBO 10M (2 tiendas, 14 productos)
  {
    id: 4,
    name: 'Turbo Market Express',
    category: 'Turbo',
    time: '10 min',
    shipping: 2500,
    rating: 4.9,
    emoji: '⚡',
    bg: '#ecfdf5',
    products: [
      { id: 'p401', title: 'Pack Bebidas + Snacks Noche', desc: 'Papas familiares, nachos, dip de queso y 2 gaseosas.', price: 19500 },
      { id: 'p402', title: 'Helado Artesanal Chocolate 500ml', desc: 'Cremoso con trozos de brownie y fudge.', price: 21900 },
      { id: 'p403', title: 'Bolsa de Hielo Cubos 3kg', desc: 'Listo para reuniones y bebidas frías.', price: 6500 },
      { id: 'p404', title: 'Café Molido Origen Antioquia 250g', desc: 'Tostión media con notas a panela y chocolate.', price: 17800 },
      { id: 'p405', title: 'Agua Mineral con Gas Sixpack 600ml', desc: '6 botellas ideales para hidratación o mezclas.', price: 13200 },
      { id: 'p406', title: 'Pan Tajado Artesanal Integral 500g', desc: 'Recién horneado con semillas de chía y girasol.', price: 9800 },
      { id: 'p407', title: 'Huevos Frescos AA x 12 Unidades', desc: 'Empaque seguro para entrega en 10 minutos.', price: 10500 }
    ]
  },
  {
    id: 15,
    name: 'Turbo Antojos & Bebidas 24/7',
    category: 'Turbo',
    time: '10 min',
    shipping: 2500,
    rating: 4.8,
    emoji: '🥤',
    bg: '#f0fdf4',
    products: [
      { id: 'p1501', title: 'Combo Cine en Casa (Crispetas + Chocolates)', desc: '2 bolsas de crispetas dulces/saladas + barra de chocolate.', price: 18900 },
      { id: 'p1502', title: 'Bebida Energizante Pack x 4 Latas', desc: '250ml cada una bien frías.', price: 22400 },
      { id: 'p1503', title: 'Sándwich Gourmet Jamón Serrano & Queso', desc: 'Listo para consumir en pan ciabatta.', price: 15900 },
      { id: 'p1504', title: 'Yogurt Griego Natural con Granola 200g', desc: 'Alto en proteína con miel y frutos secos.', price: 8900 },
      { id: 'p1505', title: 'Gomitas Ácidas Surtidas Bolsa 300g', desc: 'Mezcla de sabores frutales.', price: 9200 },
      { id: 'p1506', title: 'Jugo de Naranja 100% Exprimido 1L', desc: 'Sin azúcar añadida ni conservantes.', price: 11900 },
      { id: 'p1507', title: 'Pilas Alcalinas AA Pack x 4', desc: 'Larga duración para controles y dispositivos.', price: 12500 }
    ]
  },

  // SUPERMERCADOS (3 tiendas, 20 productos)
  {
    id: 5,
    name: 'Carulla Fresh Market',
    category: 'Supermercados',
    time: '35-45 min',
    shipping: 4500,
    rating: 4.8,
    emoji: '🥑',
    bg: '#f0fdf4',
    products: [
      { id: 'p501', title: 'Canasta Frutas y Verduras Orgánicas', desc: 'Aguacate Hass, banano, tomate chonto, limón y espinaca.', price: 42000 },
      { id: 'p502', title: 'Huevos Campesinos AA x 30 und', desc: 'Gallinas libres de jaula, frescos de granja.', price: 22900 },
      { id: 'p503', title: 'Pechuga de Pollo Sin Piel 1kg', desc: 'Empacada al vacío lista para preparar.', price: 24500 },
      { id: 'p504', title: 'Leche Deslactosada Sixpack x 1L', desc: 'Caja ahorro de 6 unidades larga vida.', price: 28400 },
      { id: 'p505', title: 'Filete de Salmón Fresco 500g', desc: 'Porciones sin espinas empacadas al vacío.', price: 44900 },
      { id: 'p506', title: 'Aceite de Oliva Extra Virgen 500ml', desc: 'Primera extracción en frío importado.', price: 36900 },
      { id: 'p507', title: 'Aguacate Hass Malla x 5 Unidades', desc: 'Maduración controlada listos para consumir.', price: 12800 }
    ]
  },
  {
    id: 6,
    name: 'D1 & Ahorro Vecino',
    category: 'Supermercados',
    time: '30-40 min',
    shipping: 3000,
    rating: 4.7,
    emoji: '🛒',
    bg: '#fefce8',
    products: [
      { id: 'p601', title: 'Mercado Básico Despensa Mensual', desc: 'Arroz 3kg, aceite 1L, lentejas, frijol, panela y sal.', price: 48900 },
      { id: 'p602', title: 'Kit Aseo Hogar Completo', desc: 'Detergente líquido 2L, suavizante, lavaloza y papel x12.', price: 39500 },
      { id: 'p603', title: 'Queso Mozzarella Tajado 500g', desc: 'Ideal para sándwiches y desayunos.', price: 13900 },
      { id: 'p604', title: 'Galletas Integrales con Avena Pack', desc: '6 paquetes individuales para lonchera.', price: 8900 },
      { id: 'p605', title: 'Atún en Aceite de Girasol Pack x 4', desc: 'Lomos seleccionados 160g por lata.', price: 21500 },
      { id: 'p606', title: 'Arroz Blanco Premium 5kg', desc: 'Grano entero de alta rendición.', price: 19800 },
      { id: 'p607', title: 'Papel Higiénico Doble Hoja x 12 Rollos', desc: 'Suavidad superior 30 metros por rollo.', price: 18500 }
    ]
  },
  {
    id: 16,
    name: 'Fruver La Cosecha Orgánica',
    category: 'Supermercados',
    time: '25-35 min',
    shipping: 3500,
    rating: 4.9,
    emoji: '🍓',
    bg: '#fff1ee',
    products: [
      { id: 'p1601', title: 'Bandeja Fresas Frescas 500g', desc: 'Seleccionadas dulces de cultivo local.', price: 9500 },
      { id: 'p1602', title: 'Arándanos Frescos Pack x 250g', desc: 'Ricos en antioxidantes listos para lavar y comer.', price: 14900 },
      { id: 'p1603', title: 'Combo Ensalada César & Vegetales', desc: 'Lechuga romana, tomate cherry, pepino y zanahoria.', price: 16500 },
      { id: 'p1604', title: 'Mango Tommy Maduro x 3 Unidades', desc: 'Dulces y jugosos.', price: 11200 },
      { id: 'p1605', title: 'Papa Criolla Lavada 1kg', desc: 'Lista para freír o preparar en airfryer.', price: 7800 },
      { id: 'p1606', title: 'Miel de Abejas Pura Multifloral 400g', desc: '100% natural sin aditivos.', price: 19900 }
    ]
  },

  // FARMACIA (2 tiendas, 13 productos)
  {
    id: 7,
    name: 'Farmatodo 24 Horas',
    category: 'Farmacia',
    time: '15-25 min',
    shipping: 3000,
    rating: 4.9,
    emoji: '💊',
    bg: '#eff6ff',
    products: [
      { id: 'p701', title: 'Kit Antigripal + Vitamina C + Zinc', desc: 'Alivio día y noche + tabletas efervescentes.', price: 24500 },
      { id: 'p702', title: 'Protector Solar Facial FPS 50+', desc: 'Toque seco resistente al agua 50ml.', price: 68900 },
      { id: 'p703', title: 'Suero Rehidratante Oral x 4 und', desc: 'Sabores surtidos manzana y uva 500ml.', price: 26000 },
      { id: 'p704', title: 'Botiquín Primeros Auxilios Básico', desc: 'Curitas, gasas estériles, alcohol y termómetro digital.', price: 35900 },
      { id: 'p705', title: 'Acetaminofén 500mg Caja x 20 Tabletas', desc: 'Alivio efectivo del dolor de cabeza y fiebre.', price: 8900 },
      { id: 'p706', title: 'Gotas Oftálmicas Lubricantes 15ml', desc: 'Alivio inmediato para ojos secos y cansados.', price: 29500 },
      { id: 'p707', title: 'Gel Antibacterial Manos Aloe 250ml', desc: 'Elimina el 99.9% de bacterias sin resecar.', price: 11500 }
    ]
  },
  {
    id: 8,
    name: 'Cruz Verde Bienestar',
    category: 'Farmacia',
    time: '20-30 min',
    shipping: 3500,
    rating: 4.8,
    emoji: '🩺',
    bg: '#f0fdfa',
    products: [
      { id: 'p801', title: 'Colágeno Hidrolizado + Biotina 300g', desc: 'Suplemento nutricional sabor frutos rojos.', price: 59000 },
      { id: 'p802', title: 'Agua Micelar Desmaquillante 400ml', desc: 'Para piel sensible, limpia e hidrata sin enjuague.', price: 38500 },
      { id: 'p803', title: 'Pañales Etapa 4 x 50 Unidades', desc: 'Absorción hasta por 12 horas con cintura elástica.', price: 54900 },
      { id: 'p804', title: 'Analgésico Ibuprofeno 400mg x 20', desc: 'Cápsulas blandas de rápida acción.', price: 14200 },
      { id: 'p805', title: 'Multivitamínico Completo x 60 Cápsulas', desc: 'Energía diaria con vitaminas A, B, C, D y minerales.', price: 47900 },
      { id: 'p806', title: 'Crema Hidratante Corporal Ceramidas 450g', desc: 'Restaura la barrera protectora de la piel.', price: 62500 }
    ]
  },

  // LICORES (2 tiendas, 12 productos)
  {
    id: 9,
    name: 'La Licorera Express',
    category: 'Licores',
    time: '20 min',
    shipping: 3500,
    rating: 4.8,
    emoji: '🍾',
    bg: '#faf5ff',
    products: [
      { id: 'p901', title: 'Vino Tinto Reserva Malbec 750ml', desc: 'Cosecha seleccionada con crianza en roble.', price: 54000 },
      { id: 'p902', title: 'Sixpack Cerveza Artesanal IPA', desc: '6 botellas de 330ml bien frías.', price: 34900 },
      { id: 'p903', title: 'Aguardiente Antioqueño Sin Azúcar 750ml', desc: 'Botella tapa azul tradicional.', price: 46500 },
      { id: 'p904', title: 'Ginebra Botánica + 4 Tónicas', desc: 'Combo listo para preparar Gin & Tonic.', price: 98000 },
      { id: 'p905', title: 'Ron Añejo 8 Años 750ml', desc: 'Notas suaves a vainilla, caramelo y madera.', price: 69900 },
      { id: 'p906', title: 'Vino Blanco Sauvignon Blanc 750ml', desc: 'Fresco y afrutado ideal para mariscos y ensaladas.', price: 49500 }
    ]
  },
  {
    id: 17,
    name: 'Cava & Destilados Club',
    category: 'Licores',
    time: '25 min',
    shipping: 4000,
    rating: 4.9,
    emoji: '🥃',
    bg: '#fffbeb',
    products: [
      { id: 'p1701', title: 'Whisky Escocés Single Malt 12 Años 700ml', desc: 'Edición clásica con estuche.', price: 189000 },
      { id: 'p1702', title: 'Tequila Reposado 100% Agave 750ml', desc: 'Suave al paladar ideal para margaritas o shots.', price: 135000 },
      { id: 'p1703', title: 'Pack 12 Cervezas Rubias Importadas', desc: 'Botellas 330ml entregadas a temperatura ideal.', price: 52000 },
      { id: 'p1704', title: 'Vino Espumoso Brut Prosecco 750ml', desc: 'Burbujas finas para celebraciones.', price: 64900 },
      { id: 'p1705', title: 'Aperitivo Spritz + Espumoso Combo', desc: 'Incluye botella aperitivo 750ml + espumoso brut.', price: 112000 },
      { id: 'p1706', title: 'Mezcladores Soda & Ginger Ale Pack x 6', desc: 'Latas de 300ml para coctelería.', price: 16800 }
    ]
  },

  // MASCOTAS (1 tienda, 7 productos)
  {
    id: 10,
    name: 'Laika Mascotas',
    category: 'Mascotas',
    time: '30-40 min',
    shipping: 3500,
    rating: 4.9,
    emoji: '🐾',
    bg: '#fffbeb',
    products: [
      { id: 'p1001', title: 'Alimento Premium Perro Adulto 3kg', desc: 'Receta de salmón y arroz integral, piel sana.', price: 62000 },
      { id: 'p1002', title: 'Arena Aglutinante para Gato 10kg', desc: 'Control de olores con aroma a lavanda, libre de polvo.', price: 38900 },
      { id: 'p1003', title: 'Snacks Dentales Perro x 14 und', desc: 'Reduce el sarro y refresca el aliento.', price: 19500 },
      { id: 'p1004', title: 'Juguete Mordedor Cuerda & Pelota', desc: 'Resistente para perros medianos y grandes.', price: 22000 },
      { id: 'p1005', title: 'Alimento Húmedo Gato Salmón Pack x 6', desc: 'Sobres de 85g ricos en taurina y omega 3.', price: 24900 },
      { id: 'p1006', title: 'Shampoo Hipoalergénico Avena 400ml', desc: 'Para perros y gatos de piel sensible.', price: 27500 },
      { id: 'p1007', title: 'Cama Acolchada Lavable Talla M', desc: 'Bordes elevados con relleno ortopédico suave.', price: 84900 }
    ]
  },

  // TECNOLOGÍA (2 tiendas, 12 productos)
  {
    id: 11,
    name: 'Mac Center & Tech',
    category: 'Tecnología',
    time: '30 min',
    shipping: 5000,
    rating: 4.8,
    emoji: '🎧',
    bg: '#f8fafc',
    products: [
      { id: 'p1101', title: 'Cargador Rápido USB-C 20W', desc: 'Carga del 0% al 50% en 30 minutos.', price: 89000 },
      { id: 'p1102', title: 'Audífonos Inalámbricos Cancelación Ruido', desc: 'Estuche de carga con 24h de batería.', price: 249000 },
      { id: 'p1103', title: 'Power Bank Magnético 10.000 mAh', desc: 'Batería portátil delgada con carga inalámbrica.', price: 159000 },
      { id: 'p1104', title: 'Cable Trenzado USB-C a USB-C 2m', desc: 'Alta resistencia para laptop y smartphone.', price: 45000 },
      { id: 'p1105', title: 'Localizador Inteligente Bluetooth', desc: 'Ubica llaves, maletas o mascotas desde tu celular.', price: 119000 },
      { id: 'p1106', title: 'Hub Adaptador USB-C 6 en 1 HDMI', desc: 'Puertos USB 3.0, lector SD y carga rápida 100W.', price: 139000 }
    ]
  },
  {
    id: 18,
    name: 'Gamer & Office Zone',
    category: 'Tecnología',
    time: '35 min',
    shipping: 4500,
    rating: 4.9,
    emoji: '⌨️',
    bg: '#eff6ff',
    products: [
      { id: 'p1801', title: 'Mouse Inalámbrico Ergonómico Silencioso', desc: 'Sensor óptico de alta precisión y batería recargable.', price: 79000 },
      { id: 'p1802', title: 'Teclado Mecánico Compacto RGB 65%', desc: 'Switches táctiles ideales para oficina y gaming.', price: 199000 },
      { id: 'p1803', title: 'Soporte Plegable de Aluminio para Laptop', desc: 'Ajustable en 6 niveles para mejorar postura.', price: 64900 },
      { id: 'p1804', title: 'Webcam Full HD 1080p con Micrófono Dual', desc: 'Enfoque automático y tapa de privacidad.', price: 129000 },
      { id: 'p1805', title: 'Mousepad XL Escritorio Impermeable 80x30cm', desc: 'Superficie microtexturizada con bordes cosidos.', price: 39900 },
      { id: 'p1806', title: 'Parlante Bluetooth Portátil Resistente al Agua', desc: '12 horas de reproducción continua y bajos potentes.', price: 149000 }
    ]
  },

  // RAPPIFAVOR (1 tienda, 5 productos)
  {
    id: 12,
    name: 'RappiFavor Mensajería',
    category: 'RappiFavor',
    time: '15-30 min',
    shipping: 4000,
    rating: 4.9,
    emoji: '🛵',
    bg: '#fdf2f8',
    products: [
      { id: 'p1201', title: 'Envío Express de Llaves o Documentos', desc: 'Recogemos y entregamos en toda el área metropolitana.', price: 9500 },
      { id: 'p1202', title: 'Compra Asistida en Tienda Local', desc: 'Un repartidor compra lo que necesites en cualquier local.', price: 12000 },
      { id: 'p1203', title: 'Entrega de Paquete Mediano (hasta 8kg)', desc: 'Transporte seguro en maleta térmica.', price: 14500 },
      { id: 'p1204', title: 'Recogida de Lavandería o Tintorería', desc: 'Llevamos tus prendas limpias hasta tu puerta.', price: 11500 },
      { id: 'p1205', title: 'Envío de Regalo o Pastel Delicado', desc: 'Cuidado especial con seguimiento GPS en vivo.', price: 15900 }
    ]
  }
];

// ESTADO GLOBAL DE LA APP
let state = {
  selectedCategory: 'ALL',
  searchQuery: '',
  cart: [],
  tip: 0,
  shipping: 3500,
  activeModalStoreId: null
};

// UTILIDAD DE FORMATO MONEDA
const formatCOP = (value) =>
  new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(value);

// REFERENCIAS DOM
const verticalsGrid = document.getElementById('verticalsGrid');
const storesGrid = document.getElementById('storesGrid');
const storeCounter = document.getElementById('storeCounter');
const catalogTitle = document.getElementById('catalogTitle');
const emptyState = document.getElementById('emptyState');
const searchInput = document.getElementById('searchInput');
const clearSearch = document.getElementById('clearSearch');

// RENDER VERTICALES
function renderVerticals() {
  verticalsGrid.innerHTML = VERTICALS.map(
    (v) => `
    <div class="vertical-card ${state.selectedCategory === v.id ? 'active' : ''}" data-category="${v.id}">
      <span class="vertical-emoji">${v.emoji}</span>
      <span class="vertical-name">${v.name}</span>
    </div>
  `
  ).join('');

  document.querySelectorAll('.vertical-card').forEach((card) => {
    card.addEventListener('click', () => {
      const cat = card.dataset.category;
      state.selectedCategory = state.selectedCategory === cat ? 'ALL' : cat;
      renderVerticals();
      renderStores();
    });
  });
}

// RENDER TIENDAS Y FILTRADO
function renderStores() {
  const query = state.searchQuery.trim().toLowerCase();

  const filtered = STORES.filter((store) => {
    const matchesCat =
      state.selectedCategory === 'ALL' || store.category === state.selectedCategory;
    const matchesProduct = store.products.some(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.desc.toLowerCase().includes(query)
    );
    const matchesSearch =
      !query ||
      store.name.toLowerCase().includes(query) ||
      store.category.toLowerCase().includes(query) ||
      matchesProduct;
    return matchesCat && matchesSearch;
  });

  const totalProductsCount = filtered.reduce((acc, s) => acc + s.products.length, 0);
  catalogTitle.textContent =
    state.selectedCategory === 'ALL'
      ? 'Destacados cerca de ti'
      : `Categoría: ${state.selectedCategory}`;
  storeCounter.textContent = `${filtered.length} tiendas • ${totalProductsCount} productos`;

  if (filtered.length === 0) {
    storesGrid.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  storesGrid.innerHTML = filtered
    .map((s) => {
      const matchingProducts = query
        ? s.products.filter(
            (p) =>
              p.title.toLowerCase().includes(query) ||
              p.desc.toLowerCase().includes(query)
          )
        : s.products;
      const previewProducts = (matchingProducts.length ? matchingProducts : s.products).slice(0, 3);

      return `
      <article class="store-card">
        <div class="store-banner" style="background:${s.bg}" onclick="openStoreMenu(${s.id})">
          <span class="store-tag">${s.category}</span>
          <span>${s.emoji}</span>
          <span class="store-count-badge">${s.products.length} productos</span>
        </div>
        <div class="store-body">
          <div class="store-top">
            <h3 class="store-name">${s.name}</h3>
            <span class="rating">★ ${s.rating}</span>
          </div>
          <div class="store-meta">⏱ ${s.time} • Envío ${formatCOP(s.shipping)}</div>

          <div class="mini-products-list">
            ${previewProducts
              .map(
                (p) => `
              <div class="mini-product-row">
                <div class="mini-product-info">
                  <span class="product-title">${p.title}</span>
                  <span class="product-price">${formatCOP(p.price)}</span>
                </div>
                <button type="button" class="btn-add" onclick="addToCart(${s.id}, '${p.id}')">+ Agregar</button>
              </div>
            `
              )
              .join('')}
          </div>

          <button type="button" class="btn-view-menu" onclick="openStoreMenu(${s.id})">
            Ver los ${s.products.length} productos →
          </button>
        </div>
      </article>
    `;
    })
    .join('');
}

// MODAL DE MENÚ COMPLETO DE UNA TIENDA
const storeModal = document.getElementById('storeModal');
const modalProductFilter = document.getElementById('modalProductFilter');

function renderModalProducts(store, filterText = '') {
  const q = filterText.trim().toLowerCase();
  const list = q
    ? store.products.filter(
        (p) => p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)
      )
    : store.products;

  const container = document.getElementById('modalProductsList');
  if (list.length === 0) {
    container.innerHTML = `<p style="text-align:center;color:#65676b;padding:24px;">No hay productos que coincidan con "${filterText}".</p>`;
    return;
  }

  container.innerHTML = list
    .map(
      (p) => `
    <div class="modal-product-item">
      <div>
        <strong style="font-size:0.95rem;display:block;">${p.title}</strong>
        <p class="modal-product-desc">${p.desc}</p>
        <span class="product-price">${formatCOP(p.price)}</span>
      </div>
      <button type="button" class="btn-add" onclick="addToCart(${store.id}, '${p.id}')">+ Agregar</button>
    </div>
  `
    )
    .join('');
}

window.openStoreMenu = function (storeId) {
  const store = STORES.find((s) => s.id === storeId);
  if (!store) return;

  state.activeModalStoreId = storeId;
  modalProductFilter.value = '';
  document.getElementById('modalStoreEmoji').textContent = store.emoji;
  document.getElementById('modalStoreName').textContent = store.name;
  document.getElementById('modalStoreMeta').textContent = `⏱ ${store.time} • Envío ${formatCOP(store.shipping)} • ★ ${store.rating} • ${store.products.length} productos`;

  renderModalProducts(store);
  storeModal.classList.remove('hidden');
};

modalProductFilter.addEventListener('input', (e) => {
  const store = STORES.find((s) => s.id === state.activeModalStoreId);
  if (store) renderModalProducts(store, e.target.value);
});

document.getElementById('closeStoreModal').addEventListener('click', () => {
  storeModal.classList.add('hidden');
});

storeModal.addEventListener('click', (e) => {
  if (e.target === storeModal) storeModal.classList.add('hidden');
});

// GESTIÓN DEL CARRITO
window.addToCart = function (storeId, productId) {
  const store = STORES.find((s) => s.id === storeId);
  if (!store) return;
  const product = store.products.find((p) => p.id === productId);
  if (!product) return;

  const existing = state.cart.find((item) => item.id === product.id);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      id: product.id,
      title: product.title,
      storeName: store.name,
      price: product.price,
      qty: 1
    });
  }

  updateCartUI();
  showToast(`Agregaste "${product.title}" a tu canasta`);
};

window.changeQty = function (productId, delta) {
  const item = state.cart.find((i) => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter((i) => i.id !== productId);
  }
  updateCartUI();
};

function updateCartUI() {
  const totalItems = state.cart.reduce((sum, i) => sum + i.qty, 0);
  document.getElementById('cartCount').textContent = totalItems;

  const container = document.getElementById('cartItemsContainer');
  const footer = document.getElementById('cartFooter');

  if (state.cart.length === 0) {
    container.innerHTML = `<p style="text-align:center;color:#65676b;margin-top:40px;">Tu canasta está vacía.<br>¡Agrega algo delicioso para empezar!</p>`;
    footer.classList.add('hidden');
    return;
  }

  footer.classList.remove('hidden');
  container.innerHTML = state.cart
    .map(
      (item) => `
    <div class="cart-item">
      <div>
        <strong style="font-size:0.9rem;display:block;">${item.title}</strong>
        <small style="color:#65676b;">${item.storeName} • ${formatCOP(item.price)}</small>
      </div>
      <div class="qty-controls">
        <button type="button" class="qty-btn" onclick="changeQty('${item.id}', -1)">-</button>
        <strong>${item.qty}</strong>
        <button type="button" class="qty-btn" onclick="changeQty('${item.id}', 1)">+</button>
      </div>
    </div>
  `
    )
    .join('');

  const subtotal = state.cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const total = subtotal + state.shipping + state.tip;

  document.getElementById('subtotalAmount').textContent = formatCOP(subtotal);
  document.getElementById('shippingAmount').textContent = formatCOP(state.shipping);
  document.getElementById('tipAmount').textContent = formatCOP(state.tip);
  document.getElementById('totalAmount').textContent = formatCOP(total);
}

// TOAST FEEDBACK
let toastTimer;
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.add('hidden'), 2600);
}

// EVENTOS DE BÚSQUEDA Y FILTROS
searchInput.addEventListener('input', (e) => {
  state.searchQuery = e.target.value;
  clearSearch.classList.toggle('hidden', !state.searchQuery);
  renderStores();
});

clearSearch.addEventListener('click', () => {
  state.searchQuery = '';
  searchInput.value = '';
  clearSearch.classList.add('hidden');
  renderStores();
});

function resetAll() {
  state.selectedCategory = 'ALL';
  state.searchQuery = '';
  searchInput.value = '';
  clearSearch.classList.add('hidden');
  renderVerticals();
  renderStores();
}

document.getElementById('showAllCategories').addEventListener('click', resetAll);
document.getElementById('emptyResetBtn').addEventListener('click', resetAll);
document.getElementById('resetFilters').addEventListener('click', (e) => {
  e.preventDefault();
  resetAll();
});

document.querySelectorAll('.banner').forEach((banner) => {
  banner.addEventListener('click', () => {
    state.selectedCategory = banner.dataset.filter;
    renderVerticals();
    renderStores();
    storesGrid.scrollIntoView({ behavior: 'smooth' });
  });
});

// MODAL DIRECCIÓN
const locationModal = document.getElementById('locationModal');
document.getElementById('openLocationModal').addEventListener('click', () => {
  locationModal.classList.remove('hidden');
});
document.getElementById('closeLocationModal').addEventListener('click', () => {
  locationModal.classList.add('hidden');
});
document.querySelectorAll('.chip').forEach((chip) => {
  chip.addEventListener('click', () => {
    document.getElementById('addressInput').value = chip.dataset.addr;
  });
});
document.getElementById('locationForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const val = document.getElementById('addressInput').value.trim();
  if (val) {
    document.getElementById('currentAddress').textContent = val;
    locationModal.classList.add('hidden');
    showToast('Dirección actualizada correctamente');
  }
});

// DRAWER CARRITO Y PROPINAS
const cartOverlay = document.getElementById('cartOverlay');
document.getElementById('openCartBtn').addEventListener('click', () => {
  cartOverlay.classList.remove('hidden');
});
document.getElementById('closeCartBtn').addEventListener('click', () => {
  cartOverlay.classList.add('hidden');
});
document.querySelectorAll('.tip-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tip-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    state.tip = Number(btn.dataset.tip);
    updateCartUI();
  });
});
document.getElementById('checkoutBtn').addEventListener('click', () => {
  state.cart = [];
  state.tip = 0;
  updateCartUI();
  cartOverlay.classList.add('hidden');
  showToast('🛵 ¡Pedido confirmado! Tu repartidor va en camino.');
});

// FORMULARIO DE ALIADOS CON VALIDACIÓN
const allyForm = document.getElementById('allyForm');
allyForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let isValid = true;

  const fields = [
    { id: 'businessName', msg: 'Ingresa el nombre de tu comercio.' },
    { id: 'businessCategory', msg: 'Selecciona una categoría.' },
    { id: 'prepTime', msg: 'Indica un tiempo entre 5 y 120 min.' },
    { id: 'ownerName', msg: 'Ingresa el nombre del contacto.' },
    { id: 'ownerPhone', msg: 'Ingresa un teléfono válido (mínimo 7 dígitos).' },
    { id: 'ownerEmail', msg: 'Ingresa un correo electrónico válido.' },
    { id: 'businessAddress', msg: 'Ingresa la dirección del local.' }
  ];

  fields.forEach(({ id, msg }) => {
    const input = document.getElementById(id);
    const errorEl = document.getElementById(`error-${id}`);
    const val = input.value.trim();
    let fieldValid = Boolean(val);

    if (id === 'ownerEmail' && val) {
      fieldValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    }
    if (id === 'ownerPhone' && val) {
      fieldValid = val.replace(/\D/g, '').length >= 7;
    }

    if (!fieldValid) {
      input.classList.add('invalid');
      errorEl.textContent = msg;
      isValid = false;
    } else {
      input.classList.remove('invalid');
      errorEl.textContent = '';
    }
  });

  const terms = document.getElementById('acceptTerms');
  const termsError = document.getElementById('error-acceptTerms');
  if (!terms.checked) {
    termsError.textContent = 'Debes aceptar los términos para continuar.';
    isValid = false;
  } else {
    termsError.textContent = '';
  }

  if (!isValid) return;

  const successBox = document.getElementById('formSuccessBox');
  successBox.innerHTML = `
    <strong>✅ ¡Solicitud enviada con éxito!</strong><br>
    Registramos a <b>${document.getElementById('businessName').value}</b> en la vertical de <b>${document.getElementById('businessCategory').value}</b>. Nuestro equipo comercial escribirá pronto a <b>${document.getElementById('ownerEmail').value}</b>.
  `;
  successBox.classList.remove('hidden');
  allyForm.reset();
});

// INICIALIZAR APP
renderVerticals();
renderStores();
updateCartUI();