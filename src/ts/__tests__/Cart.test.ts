import Cart from '../service/Cart';
import Book from '../domain/Book';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('Добавление товара', () => {
  const result = [{author: "Толстой", id: 333, name: "Война и мир", pages: 654, price: 1000}];

  const cart = new Cart();

  cart.add(new Book(333, 'Война и мир', 'Толстой', 1000, 654));

  expect(cart.items).toEqual(result);
});

test('Суммарная стоимость', () => {

  const cart = new Cart();
  cart.add(new Book(333, 'Война и мир', 'Толстой', 1000, 654));
  cart.add(new Movie(777, 'Мстители', 500, 2012, 'USA', 'Avengers assemble!', 'Фантастика, боевик', 217));


  expect(cart.totalPrice()).toBe(1500);
});

test('Расчет скидки', () => {

  const cart = new Cart();
  cart.add(new Book(333, 'Война и мир', 'Толстой', 1000, 654));
  cart.add(new Movie(777, 'Мстители', 500, 2012, 'USA', 'Avengers assemble!', 'Фантастика, боевик', 217));


  expect(cart.discountPrice(50)).toBe(750);
});

test('Удаление по id', () => {

  const expected = [{author: "Толстой", id: 333, name: "Война и мир", pages: 654, price: 1000}];

  const cart = new Cart();
  cart.add(new Book(333, 'Война и мир', 'Толстой', 1000, 654));
  cart.add(new Movie(777, 'Мстители', 500, 2012, 'USA', 'Avengers assemble!', 'Фантастика, боевик', 217));
  cart.deletedItem(777);

  expect(cart.items).toEqual(expected);
});
