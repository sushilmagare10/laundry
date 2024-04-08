import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowUpNarrowWide, IndianRupee, ShoppingBasket, Users } from 'lucide-react'
import React from 'react'
import SalesCard, { SalesProps } from '../../_components/sales-card'
import BarChart from '../../_components/bar-chart';


const uesrSalesData: SalesProps[] = [
    {
        name: "Olivia Martin",
        email: "olivia.martin@email.com",
        saleAmount: "+$1,999.00"
    },
    {
        name: "Jackson Lee",
        email: "isabella.nguyen@email.com",
        saleAmount: "+$1,999.00"
    },
    {
        name: "Isabella Nguyen",
        email: "isabella.nguyen@email.com",
        saleAmount: "+$39.00"
    },
    {
        name: "William Kim",
        email: "will@email.com",
        saleAmount: "+$299.00"
    },
    {
        name: "Sofia Davis",
        email: "sofia.davis@email.com",
        saleAmount: "+$39.00"
    }
];

const Dashboard = () => {
    return (
        <div className=' w-full flex flex-col gap-6 justify-center items-center'>
            <h2 className=' flex self-start ml-10 mt-14 text-5xl font-semibold'>Dashboard</h2>
            <div className='w-full px-10 grid grid-cols-12 gap-10 mt-10'>
                <Card className=' col-span-3 p-10'>
                    <div className='flex  items-center'>
                        <div className=' flex gap-3 w-full justify-between items-center font-bold text-xl'>
                            <IndianRupee className='h-20 w-20 rounded-full justify-center p-5 text-white bg-teal-500' />
                            <div className='flex flex-col text-3xl gap-4'>
                                <CardTitle>
                                    Sales
                                </CardTitle>
                                25000
                            </div>
                        </div>
                    </div>
                </Card>
                <Card className=' col-span-3 p-10'>
                    <div className='flex  items-center'>
                        <div className=' flex gap-3 w-full justify-between items-center font-bold text-xl'>
                            <ShoppingBasket className='h-20 w-20 rounded-full justify-center p-5 text-white bg-orange-500' />
                            <div className='flex flex-col text-3xl gap-4'>
                                <CardTitle>
                                    Orders
                                </CardTitle>
                                300
                            </div>
                        </div>
                    </div>
                </Card>
                <Card className=' col-span-3 p-10'>
                    <div className='flex  items-center'>
                        <div className=' flex gap-3 w-full justify-between items-center font-bold text-xl'>
                            <ArrowUpNarrowWide className='h-20 w-20 rounded-full justify-center p-5 text-white bg-blue-500' />
                            <div className='flex flex-col self-end text-3xl gap-4'>
                                <CardTitle>
                                    Pending Orders
                                </CardTitle>
                                <p className=' self-end'>45</p>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card className=' col-span-3 p-10'>
                    <div className='flex  items-center'>
                        <div className=' flex gap-3 w-full justify-between items-center font-bold text-xl'>
                            <Users className='h-20 w-20 rounded-full justify-center p-5 text-white bg-cyan-500' />
                            <div className='flex flex-col text-3xl gap-4'>
                                <CardTitle>
                                    Customers
                                </CardTitle>
                                500
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            <section className="px-10  grid grid-cols-12 mt-5 gap-4 transition-all w-full">
                <CardContent className=' border-2 rounded-lg col-span-6'>
                    <p className="p-4 font-semibold">Overview</p>

                    <BarChart />
                </CardContent>
                <CardContent className="flex flex-col col-span-6 justify-between p-4 gap-6 border rounded-lg">
                    <section>
                        <p>Recent Sales</p>
                        <p className="text-sm text-gray-400">
                            You made 265 sales this month.
                        </p>
                    </section>
                    {uesrSalesData.map((d, i) => (
                        <SalesCard
                            key={i}
                            email={d.email}
                            name={d.name}
                            saleAmount={d.saleAmount}
                        />
                    ))}
                </CardContent>

                {/*  */}
            </section>
        </div>
    )
}

export default Dashboard