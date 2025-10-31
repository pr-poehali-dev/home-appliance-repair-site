import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    appliance: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', appliance: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Wrench" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">РемонтМастер</h1>
                <p className="text-xs text-muted-foreground">Ремонт бытовой техники</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              {['home', 'services', 'prices', 'reviews', 'guarantees', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-semibold transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'services' && 'Услуги'}
                  {section === 'prices' && 'Цены'}
                  {section === 'reviews' && 'Отзывы'}
                  {section === 'guarantees' && 'Гарантии'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </nav>
            <Button onClick={() => scrollToSection('booking')} className="hidden md:flex">
              Онлайн-запись
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-32 bg-gradient-to-br from-primary/10 via-secondary/5 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-secondary">Работаем с 2010 года</Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Ремонт бытовой техники
                <span className="text-primary"> на дому</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Профессиональный ремонт холодильников, стиральных машин и другой техники. 
                Выезд мастера в день обращения. Гарантия на все работы.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg" onClick={() => scrollToSection('booking')}>
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться на ремонт
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  <Icon name="Phone" className="mr-2" size={20} />
                  +7 (999) 123-45-67
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-gray-600">Выполненных работ</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">24/7</div>
                  <div className="text-sm text-gray-600">Принимаем заявки</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">15</div>
                  <div className="text-sm text-gray-600">Лет на рынке</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/cdd84e08-c8e5-4e83-9c03-316b40127f5e/files/3819b689-1aba-4429-9d02-db263ec7d1f7.jpg"
                alt="Ремонт техники"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Наши услуги</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что мы ремонтируем</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Профессиональный ремонт любой сложности с использованием оригинальных запчастей
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Refrigerator',
                title: 'Холодильники',
                description: 'Ремонт компрессора, замена термостата, устранение утечки фреона',
                features: ['Все марки', 'Выезд в день обращения', 'Гарантия 1 год']
              },
              {
                icon: 'WashingMachine',
                title: 'Стиральные машины',
                description: 'Замена подшипников, ремонт помпы, устранение протечек',
                features: ['Любые модели', 'Оригинальные запчасти', 'Работаем на дому']
              },
              {
                icon: 'Microwave',
                title: 'Другая техника',
                description: 'Посудомоечные машины, духовые шкафы, микроволновки',
                features: ['Диагностика бесплатно', 'Быстрый ремонт', 'Честные цены']
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-2">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Icon name="Check" className="text-primary" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Прозрачные цены</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Стоимость работ</h2>
            <p className="text-xl text-gray-600">Фиксированные цены без скрытых платежей</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { service: 'Диагностика', price: 'Бесплатно', icon: 'Search' },
              { service: 'Замена компрессора холодильника', price: 'от 4500 ₽', icon: 'Refrigerator' },
              { service: 'Замена подшипников стиральной машины', price: 'от 3200 ₽', icon: 'Cog' },
              { service: 'Устранение протечки', price: 'от 1800 ₽', icon: 'Droplet' },
              { service: 'Замена помпы', price: 'от 2500 ₽', icon: 'Fan' },
              { service: 'Ремонт электроники', price: 'от 2000 ₽', icon: 'Cpu' }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={item.icon as any} className="text-primary" size={24} />
                    </div>
                    <span className="font-semibold">{item.service}</span>
                  </div>
                  <span className="text-xl font-bold text-primary">{item.price}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Отзывы клиентов</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что говорят наши клиенты</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Елена Петрова',
                text: 'Отличный сервис! Мастер приехал в тот же день, быстро нашёл проблему с холодильником и устранил её. Цены честные, работа качественная.',
                rating: 5,
                date: '15 октября 2024'
              },
              {
                name: 'Сергей Иванов',
                text: 'Ремонтировали стиральную машину. Всё сделали профессионально, объяснили что было сломано. Гарантию дали на год. Рекомендую!',
                rating: 5,
                date: '3 октября 2024'
              },
              {
                name: 'Мария Козлова',
                text: 'Очень довольна! Быстро, качественно, недорого. Мастер вежливый, всё убрал за собой. Теперь буду обращаться только сюда.',
                rating: 5,
                date: '28 сентября 2024'
              }
            ].map((review, index) => (
              <Card key={index} className="animate-fade-in">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-xs">{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section id="guarantees" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Наши гарантии</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему выбирают нас</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: 'Shield', title: 'Гарантия 1 год', description: 'На все виды работ и запчасти' },
              { icon: 'Clock', title: 'Выезд в день обращения', description: 'Работаем без выходных' },
              { icon: 'Wrench', title: 'Опытные мастера', description: 'Стаж работы от 5 лет' },
              { icon: 'BadgeCheck', title: 'Оригинальные запчасти', description: 'Только качественные комплектующие' }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Онлайн-запись</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Оставьте заявку</h2>
              <p className="text-xl text-gray-600">Мы свяжемся с вами в течение 15 минут</p>
            </div>
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                    <Input
                      placeholder="Иван"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Телефон</label>
                    <Input
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Тип техники</label>
                    <Input
                      placeholder="Холодильник, стиральная машина..."
                      value={formData.appliance}
                      onChange={(e) => setFormData({ ...formData, appliance: e.target.value })}
                      required
                      className="text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Описание проблемы</label>
                    <Textarea
                      placeholder="Опишите, что случилось с техникой..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="text-base"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-lg">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Контакты</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-primary" size={28} />
                </div>
                <CardTitle>Телефон</CardTitle>
                <CardDescription className="text-base font-semibold text-gray-900">+7 (999) 123-45-67</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="text-secondary" size={28} />
                </div>
                <CardTitle>Email</CardTitle>
                <CardDescription className="text-base font-semibold text-gray-900">info@remontmaster.ru</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="text-primary" size={28} />
                </div>
                <CardTitle>Адрес</CardTitle>
                <CardDescription className="text-base font-semibold text-gray-900">Москва, работаем по всему городу</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Wrench" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold">РемонтМастер</span>
              </div>
              <p className="text-gray-400">Профессиональный ремонт бытовой техники на дому с 2010 года</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Ремонт холодильников</li>
                <li>Ремонт стиральных машин</li>
                <li>Ремонт посудомоек</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Компания</h3>
              <ul className="space-y-2 text-gray-400">
                <li>О нас</li>
                <li>Гарантии</li>
                <li>Отзывы</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (999) 123-45-67</li>
                <li>info@remontmaster.ru</li>
                <li>Москва</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 РемонтМастер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
